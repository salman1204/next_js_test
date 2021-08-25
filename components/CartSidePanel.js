import { useState } from 'react'
import SlidingPanel from 'react-sliding-side-panel'
import 'react-sliding-side-panel/lib/index.css'

const CartSidePanel = ({ openPanelHandler }) => {
  const [openPanel, setOpenPanel] = useState(true)

  return (
    <div>
      <SlidingPanel
        type="right"
        isOpen={openPanel}
        backdropClicked={() => setOpenPanel(false)}
        size={25}
        noBackdrop={false}
      >
        <div className="panel-container">
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
