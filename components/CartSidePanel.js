import { useDispatch, useSelector } from 'react-redux'
import SlidingPanel from 'react-sliding-side-panel'
import 'react-sliding-side-panel/lib/index.css'
import slidePanelSize from '../helpers/slidePanelSize'
import styles from '../styles/CartSidePanel.module.css'

const CartSidePanel = () => {
  const slideCartOpen = useSelector((state) => state.slideCardOpenReducer)
  const dispatch = useDispatch()

  let panelSize = slidePanelSize()

  return (
    <div>
      <SlidingPanel
        type="right"
        isOpen={slideCartOpen}
        backdropClicked={() => {
          dispatch({ type: 'SLIDE_CART_OPEN' })
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
              dispatch({ type: 'SLIDE_CART_OPEN' })
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
