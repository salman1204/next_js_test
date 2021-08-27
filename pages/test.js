import { useSelector } from 'react-redux'

const test = () => {
  const slideCartOpen = useSelector((state) => state.slideCardOpenReducer)

  console.log(slideCartOpen);
  return (
    <div>
      Enter
    </div>
  );
}

export default test;