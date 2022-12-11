import { format, formatDistanceToNow } from 'date-fns'
import locale from 'date-fns/locale/en-US'

interface RelativeTimeToNowProps {
  fromDate: Date
}

export function RelativeTimeToNow ({ fromDate }: RelativeTimeToNowProps) {
  const dateExtendedFormat = format(fromDate, "MM/dd/yyyy HH:mm 'o''clock'", {
    locale
  })

  const relativeDateToNow = formatDistanceToNow(fromDate, {
    locale,
    addSuffix: true
  })

  return (
    <time title={dateExtendedFormat} dateTime={fromDate.toISOString()}>
      {relativeDateToNow}
    </time>
  )
}
