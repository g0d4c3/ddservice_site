import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - DD Service',
    default: 'DD Service - Esperti in manutenzione impianti termici, industriali e ospedalieri',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="it" className="h-full bg-ddblue-500 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
