import { useState } from 'react'
import SlidingPanel from 'react-sliding-side-panel'
import 'react-sliding-side-panel/lib/index.css'
import styles from '../styles/CartSidePanel.module.css'

const CartSidePanel = ({ openPanelHandler }) => {
  const [openPanel, setOpenPanel] = useState(true)
  const screenSize = window.innerWidth

  let panelSize = 25

  if (screenSize < 650) {
    panelSize = 60
  } else if (screenSize > 650 && screenSize < 900) {
    panelSize = 45
  } else if (screenSize > 900 && screenSize < 1200) {
    panelSize = 35
  } else {
    panelSize = 25
  }

  return (
    <div>
      <SlidingPanel
        type="right"
        isOpen={openPanel}
        backdropClicked={() => {
          setOpenPanel(false)
          openPanelHandler(false)
        }}
        size={panelSize}
        noBackdrop={false}
      >
        <div className={styles.cart__panel}>
          <div>My Panel Content</div>
          <button
            type="button"
            className="close-button"
            onClick={() => {
              setOpenPanel(false)
              openPanelHandler(false)
            }}
          >
            close
          </button>
        </div>
      </SlidingPanel>
    </div>
  )
}

export default CartSidePanel
