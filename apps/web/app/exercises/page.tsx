'use client';
import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';

type Exercise = { id: string; name: string };
const api = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:5075';
export default function Exercises() {
  const [name, setName] = useState('');
  const [items, setItems] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [listError, setListError] = useState('');
  const [saveError, setSaveError] = useState('');
  const [success, setSuccess] = useState('');
  const submitting = useRef(false);
  const load = useCallback(async () => {
    try {
      const response = await fetch(`${api}/api/exercises`, { cache: 'no-store' });
      if (!response.ok) throw new Error();
      setItems(await response.json()); setListError('');
    } catch { setListError('Não foi possível atualizar a lista. Tente consultar novamente.'); }
    finally { setLoading(false); }
  }, []);
  // Synchronize the initial list with the external API; state updates follow fetch.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { void load(); }, [load]);
  async function save(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    submitting.current = true;
    setSaving(true); setSaveError(''); setSuccess('');
    try {
      const response = await fetch(`${api}/api/exercises`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name }) });
      if (!response.ok) {
        setSaveError(response.status === 400 ? 'Informe o nome do exercício.' : 'Não foi possível salvar. Consulte a lista antes de tentar novamente.');
        return;
      }
      const created: Exercise = await response.json();
      setItems(current => [...current, created]);
      setName(''); setSuccess('Exercício salvo.');
    } catch { setSaveError('Não foi possível confirmar o salvamento. Consulte a lista antes de enviar novamente.'); }
    finally { submitting.current = false; setSaving(false); }
  }
  return <main>
    <header><span className="brand">DELTA FIT</span><span className="badge">Ambiente local · I0</span></header>
    <h1>Exercícios</h1><p>Cadastre um exercício de teste e consulte os nomes salvos.</p>
    <section aria-labelledby="new-title"><h2 id="new-title">Novo exercício</h2>
      <form onSubmit={save} noValidate><label htmlFor="name">Nome</label>
        <div className="row"><input id="name" value={name} onChange={e => setName(e.target.value)} disabled={saving} aria-invalid={!!saveError} aria-describedby={saveError ? 'save-error' : undefined} /><button disabled={saving || loading} type="submit">{saving ? 'Salvando…' : 'Salvar'}</button></div>
      </form>
      {saveError && <p id="save-error" role="alert">{saveError}</p>}
      {success && <p role="status" className="success">{success}</p>}
    </section>
    <section aria-labelledby="list-title"><div className="row heading"><h2 id="list-title">Exercícios salvos</h2><button className="secondary" onClick={() => { setLoading(true); setListError(''); void load(); }} disabled={loading || saving}>Consultar lista</button></div>
      {loading && <p role="status">Carregando exercícios…</p>}
      {listError && <p role="alert">{listError}</p>}
      {!loading && !listError && items.length === 0 && <p>Nenhum exercício cadastrado.</p>}
      {items.length > 0 && <ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>}
    </section>
  </main>;
}
