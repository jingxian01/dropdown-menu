import React, { useState } from "react";
import DropDown, { Option } from "react-dropdown";
import "react-dropdown/style.css"; // style

const option: Array<Option> = [
  {
    value: "1",
    label: "option 1",
  },
  {
    value: "2",
    label: "option 2",
  },
  {
    value: "3",
    label: "option 3",
  },
];

const Dropdown = () => {
  const defaultLabel = "Select an option";
  const defaultOption = {
    value: "0",
    label: defaultLabel,
  };
  const [selectedOption, setSelectedOption] = useState<Option>(defaultOption);

  const onChangeDropdown = (selected: Option) => {
    setSelectedOption(selected);
  };

  const message = () => {
    if (Number(selectedOption.value)) {
      return (
        <div style={{ marginTop: "20px" }}>
          you chose {selectedOption.label}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <DropDown
        onChange={onChangeDropdown}
        options={option}
        value={selectedOption}
        placeholder={defaultLabel}
      />
      {message()}
    </div>
  );
};

export default Dropdown;
