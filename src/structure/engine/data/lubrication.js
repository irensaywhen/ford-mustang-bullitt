export const faults = [
  {
    title: 'Подтекание масла',
    description:
      'Может возникать из-за избыточного давления, слабо затянутой сливной пробки в поддоне, повреждения уплотнительных прокладок и маслопроводов, износа сальников.',
  },
  {
    title: 'Низкое давление в системе смазки',
    description:
      'Может возникать по причине недостаточного количества масла, некачественного масла, износа подшипников и деталей масляного насоса',
  },
];

export const definitions = [
  {
    header: 'Поддон картера',
    body:
      'Является резервуаром для хранения масла. Когда масло заливается через маслозаливную горловину, оно проходит по пустотам внутри двигателя и опускается в поддон картера. Уровень можно измерить масляным щупом.',
  },
  {
    header: 'Масляный насос',
    body:
      'Под давлением подает масло к элементам двигателя. Состоит из двух шестерен и приводится в действие от коленчатого вала двигателя. При вращении шестерен зубья захватывают масло и нагнетают его в главную маслянную магистраль. Имеет фильтр для предотвращеняи попадания в масло частиц. ',
  },
  {
    header: 'Редукционный клапан',
    body:
      'Служит для ограничения давления в системе и сливает лишнее масло из трубок в картер.',
  },
  {
    header: 'Масляный фильтр',
    body:
      'Служит для очистки проходящего через него масла от механических примесей. Устанавливается сразу после насоса. В случае засорения масло будет проходить без очистки.',
  },
  {
    header: 'Вентилятор картера двигателя',
    body:
      'Обеспечивает отсос из картера и отвод во впускной трубопровод паров бензина и выхлопных газов, которые попадают в нижнюю часть двигателя.',
  },
  {
    header: 'Радиатор',
    body: 'Служит для охлаждения масла.',
  },
];

export const lubricationSystemParts = [
  'Поддона картера',
  'Масляного насоса с маслоприемником',
  'Масляного фильтра',
  'Редукционного клапана',
  'Каналов для подачи масла',
  'Вентилятор картера двигателя',
  'Радиатора',
];

export const oilCheckProcedure = [
  'Включить стояночный тормоз',
  'Включить двигатель и дождаться, пока он прогреется',
  'Выключить двигатель и подождать 15 минут, чтобы масло стекло в картер',
  'Открыть капот',
  'Достать щуп, протереть его, провести измерение и убедиться, что уровень масла между максимальной и минимальной отметками',
];
