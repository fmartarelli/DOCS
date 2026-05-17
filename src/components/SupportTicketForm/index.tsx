import type {ChangeEvent, FormEvent} from 'react';
import {useEffect, useMemo, useState} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

type SupportFormState = {
  setor: string;
  assunto: string;
  descricao: string;
};

type ErrorMap = Record<string, string[]>;

const initialState: SupportFormState = {
  setor: '',
  assunto: '',
  descricao: '',
};

const setorOptions = [
  {value: '', label: 'Selecione o setor'},
  {value: 'suporte', label: 'Tecnologia'},
  {value: 'financeiro', label: 'Financeiro'},
  {value: 'marketing', label: 'Marketing'},
  {value: 'sugestoes', label: 'Sugestões ou elogios'},
];

function flattenErrors(errors: ErrorMap): string[] {
  return Object.values(errors).flat().filter(Boolean);
}

export default function SupportTicketForm() {
  const {siteConfig} = useDocusaurusContext();
  const apiBaseUrl = String(siteConfig.customFields?.supportApiBaseUrl ?? '').replace(
    /\/$/,
    '',
  );

  const [form, setForm] = useState<SupportFormState>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [authToken, setAuthToken] = useState('');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const token = window.localStorage.getItem('maxflow.token') ?? '';
    setAuthToken(token);
  }, []);

  const hasToken = useMemo(() => authToken.trim().length > 0, [authToken]);

  function updateField(
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const {name, value} = event.target;
    setForm((current) => ({...current, [name]: value}));
    setErrors([]);
    setSuccessMessage('');
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrors([]);
    setSuccessMessage('');

    const localErrors: string[] = [];

    if (!form.assunto.trim()) {
      localErrors.push('O assunto deve ser informado.');
    }

    if (!form.descricao.trim()) {
      localErrors.push('A descrição deve ser informada.');
    }

    if (localErrors.length > 0) {
      setErrors(localErrors);
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(`${apiBaseUrl}/api/ajuda/suporte`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(hasToken ? {Authorization: `Bearer ${authToken}`} : {}),
        },
        body: JSON.stringify({
          setor: form.setor || null,
          assunto: form.assunto.trim(),
          descricao: form.descricao.trim(),
        }),
      });

      if (response.ok) {
        setForm(initialState);
        setSuccessMessage('Solicitação de suporte realizada com sucesso.');
        return;
      }

      if (response.status === 401 || response.status === 403) {
        setErrors([
          'Não foi possível enviar o chamado automaticamente porque este envio depende de autenticação do Maxflow.',
          'Se necessário, faça login no Portal e tente novamente no mesmo navegador ou use o WhatsApp e o e-mail de suporte.',
        ]);
        return;
      }

      const contentType = response.headers.get('content-type') ?? '';
      if (contentType.includes('application/json')) {
        const payload = await response.json();
        const extracted = flattenErrors(
          payload?.errors ?? payload?.Errors ?? {Error: ['Não foi possível enviar o chamado.']},
        );

        setErrors(
          extracted.length > 0
            ? extracted
            : ['Não foi possível enviar o chamado no momento.'],
        );
        return;
      }

      setErrors(['Não foi possível enviar o chamado no momento.']);
    } catch {
      setErrors([
        'Não foi possível comunicar com o serviço de suporte agora.',
        'Use o WhatsApp ou o e-mail caso precise de atendimento imediato.',
      ]);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <strong>WhatsApp</strong>
          <span>(16) 99713-9753</span>
          <a href="https://wa.me/5516997139753" target="_blank" rel="noreferrer">
            Abrir conversa
          </a>
        </div>

        <div className={styles.infoCard}>
          <strong>E-mail</strong>
          <span>Suporte@maxflow.com.br</span>
          <a href="mailto:Suporte@maxflow.com.br">Enviar e-mail</a>
        </div>

        <div className={styles.infoCard}>
          <strong>Atendimento</strong>
          <span>Segunda a sexta, das 08:00 às 19:00</span>
          <span>Sábado, das 08:00 às 13:00</span>
        </div>
      </div>

      {!hasToken && (
        <div className={styles.warningBox}>
          Este formulário usa o mesmo envio de suporte do Portal. Como o endpoint atual
          exige autenticação, o envio automático pode depender de um acesso válido do
          Maxflow no navegador.
        </div>
      )}

      <form className={styles.formCard} onSubmit={handleSubmit}>
        <div className={styles.fieldGrid}>
          <div className={styles.field}>
            <label htmlFor="setor">Setor</label>
            <select id="setor" name="setor" value={form.setor} onChange={updateField}>
              {setorOptions.map((option) => (
                <option
                  key={option.value || 'empty'}
                  value={option.value}
                  disabled={option.value === ''}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.field}>
            <label htmlFor="assunto">
              Assunto <span>*</span>
            </label>
            <input
              id="assunto"
              name="assunto"
              type="text"
              value={form.assunto}
              onChange={updateField}
              placeholder="Resumo do problema ou solicitação"
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="descricao">
            Descrição <span>*</span>
          </label>
          <textarea
            id="descricao"
            name="descricao"
            rows={6}
            value={form.descricao}
            onChange={updateField}
            placeholder="Descreva seu chamado com detalhes"
          />
        </div>

        {errors.length > 0 && (
          <div className={styles.errorBox}>
            <ul>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        {successMessage && <div className={styles.successBox}>{successMessage}</div>}

        <div className={styles.actions}>
          <button className={styles.primaryButton} type="submit" disabled={submitting}>
            {submitting ? 'Enviando...' : 'Enviar chamado'}
          </button>
          <a
            className={styles.secondaryButton}
            href="https://wa.me/5516997139753"
            target="_blank"
            rel="noreferrer">
            Falar no WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
}
