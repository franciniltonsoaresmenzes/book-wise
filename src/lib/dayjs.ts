import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTimer from 'dayjs/plugin/relativeTime'

dayjs.locale('pt-br')
dayjs.extend(relativeTimer)
