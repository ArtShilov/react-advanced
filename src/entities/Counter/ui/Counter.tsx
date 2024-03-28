import Button from "shared/ui/Button/Button";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../model/slice/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

const Counter = () => {
  const dispatch = useDispatch();

  const counterValue = useSelector(getCounterValue);

  const handleIncrement = () => dispatch(counterActions.increment());

  const handleDecrement = () => dispatch(counterActions.decrement());

  return (
    <>
      <h1 data-testid='value-title'>value = {counterValue}</h1>
      <Button onClick={handleIncrement} data-testid='button-increment'>{t("increment")}</Button>
      <br />
      <Button onClick={handleDecrement} data-testid='button-decrement'>{t("decrement")}</Button>
    </>
  );
};

export default Counter;
