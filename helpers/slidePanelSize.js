const slidePanelSize = () => {
  const screenSize = window.innerWidth
  let panelSize ;
  if (screenSize < 650) {
    return (panelSize = 60)
  } else if (screenSize > 650 && screenSize < 900) {
    return (panelSize = 45)
  } else if (screenSize > 900 && screenSize < 1200) {
    return (panelSize = 35)
  } else {
    return (panelSize = 25)
  }
}

export default slidePanelSize
