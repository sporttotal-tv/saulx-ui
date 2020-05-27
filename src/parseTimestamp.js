export default ts => {
  if (!ts) {
    return {
      time: [],
      date: []
    }
  }

  const d = new Date(ts)
  const time = [d.getHours(), d.getMinutes(), d.getSeconds()].map(v =>
    v < 10 ? '0' + v : v + ''
  )

  const r = {
    time,
    date: [d.getDate(), d.getMonth() + 1, d.getFullYear()]
  }

  return r
}
