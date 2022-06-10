import { MouseEvent } from "react";
import classnames from "classnames";
import "./Filters.css";
import { Filter } from "../../types";
import Button from "../Button";

interface Props {
  activeFilter: Filter;
  onChange: (e: MouseEvent<HTMLButtonElement>) => void;
}

const filters = Object.values(Filter)

const Filters = ({activeFilter, onChange}: Props) => {
  return (
    <div className="filters">
      {filters.map((filter) => (
        <Button className={classnames({ 'button__active': filter === activeFilter })} key={filter} value={filter} text={filter} onClick={onChange}/>
      ))}
    </div>
  )
};

export default Filters;