import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface RelativeTimeToNowProps {
  fromDate: Date
}

export function RelativeTimeToNow ({ fromDate }: RelativeTimeToNowProps) {
  const dateExtendedFormat = format(fromDate, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const relativeDateToNow = formatDistanceToNow(fromDate, {
    locale: ptBR,
    addSuffix: true
  })

  return (
    <time title={dateExtendedFormat} dateTime={fromDate.toISOString()}>
      {relativeDateToNow}
    </time>
  )
}
