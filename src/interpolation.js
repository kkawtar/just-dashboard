const format_string = (input, state) => {
  if (Object.entries(state).length === 0) return input
  const first_key = Object.keys(state)[0]
  const copy = Object.assign({}, state)
  delete copy[first_key]
  return format_string(input.replace('${' + first_key + '}', state[first_key]), copy)
}

const format_array = (input, state) => {
  return input.map(item => format_object(item, state))
}

const format_object = (input, state) => {
  if (input instanceof Array) return format_array(input, state)
  if (typeof input === "string") return format_string(input, state)
  return input
}

export { format_string , format_array, format_object }
