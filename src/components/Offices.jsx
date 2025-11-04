import clsx from 'clsx'

function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Sede Operativa" invert={invert}>
          [Indirizzo da inserire]
          <br />
          [CAP, Città, Provincia]
          <br />
          Tel: [Numero da inserire]
        </Office>
      </li>
      <li>
        <Office name="Contatti" invert={invert}>
          Email: info@ddservice.it
          <br />
          PEC: [Da inserire]
          <br />
          P.IVA: [Da inserire]
        </Office>
      </li>
    </ul>
  )
}
