import React from "react";

const SuggestionList = ({
  suggestions = [],
  highlight,
  datakey,
  onSuggestionClick,
}) => {

  const getHighlightedText = (text, highlight) => {
    const parts = text.split(new RegExp(`(${highlight})`, "gi"));
    return (
      <span>
        {parts.map((part, index) => {
          return part.toLowerCase() === highlight.toLowerCase() ? (
            <b key={index}>{part}</b>
          ) : (
            part
          );
        })}
      </span>
    );
  };

  return (
    <div>
      <React.Fragment>
        {suggestions.map((suggestion, index) => {
          const currSuggestion = datakey ? suggestion[datakey] : suggestion;
          return (
            <li
              key={index}
              onClick={() => onSuggestionClick(suggestion)}
              className="suggestion-item"
            >
              {getHighlightedText(currSuggestion, highlight)}
            </li>
          );
        })}
      </React.Fragment>
    </div>
  );
};

export default SuggestionList;
