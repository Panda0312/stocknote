import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { increment, decrement } from "./counter-slice"
import { useGetEquityByCountQuery } from "./api-slice"

export const Counter = () => {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  const { data, isFetching } = useGetEquityByCountQuery(count)

  return (
    <div className="counter">
      {isFetching && <span>Loading</span>}
      <div>{data?.result.length}</div>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}