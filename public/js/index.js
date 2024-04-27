function makeHtmlTable(remitos) {
  return fetch('views/remitos.ejs')
      .then(respuesta => respuesta.text())
      .then(plantilla => {
          const template = ejs.compile(plantilla)
          const html = template({ remitos })
          return html
      })
}