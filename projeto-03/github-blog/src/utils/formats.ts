import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatText(text: string, limitLength = 50) {
  const textArr = text.split(" ")
  const newText = textArr.map((string, index) => {
    if (index < limitLength) return string
  }).filter(string => string !== undefined
  )
  return `${newText.toString().replaceAll(",", " ")}...`
}

export function formatDate(date: string) {
  const currentDate = format(parseISO(date), "d/LL/yy HH:mm", { locale: ptBR });

  return date !== null ? currentDate : "";
}