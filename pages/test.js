import { useState } from 'react'
import SlidingPanel from 'react-sliding-side-panel'
import 'react-sliding-side-panel/lib/index.css'

export default function home() {
  const [openPanel, setOpenPanel] = useState(false)

  return (
    <div className="example-container">
      <div className="form-container">
        <h1>React Sliding Side Panel</h1>

        <div>
          <button
            type="button"
            onClick={() => {
              setOpenPanel(true)
            }}
          >
            Right
          </button>
        </div>
      </div>
      <SlidingPanel
        type="right"
        isOpen={openPanel}
        backdropClicked={() => setOpenPanel(false)}
        size={20}
        panelClassName="additional-class"
        panelContainerClassName=""
        noBackdrop={false}
      >
        <div className="panel-container">
          <div>My Panel Content</div>
          <button
            type="button"
            className="close-button"
            onClick={() => {setOpenPanel(false)}}
          >
            close
          </button>
        </div>
      </SlidingPanel>
    </div>
  )
}
