const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Portugês",
    "Química"
  ]

  const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
  ]

//funcionalidades
function getSubject(subjectNumber) {
  const position = +subjectNumber -1
  return subjects[position]
  //essa função serve para mostrar o valor do subject
}


function convertHoursToMinutes (time) {
  const [hour, minutes] = time.split(':')
  return Number((hour * 60) + minutes)

}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes 
}