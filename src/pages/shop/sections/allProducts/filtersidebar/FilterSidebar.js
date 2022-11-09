import React, { useState } from "react";
import "./FilterSidebar.css";
import { filterOptions } from "./FilterOptions";
import ReactSlider from "react-slider";
import { FiTrash2 } from "react-icons/fi";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const FilterSidebar = () => {
  const [show, setShow] = useState({
    sizeAcc: { val: false },
    preferenceAcc: { val: false },
    genderAcc: { val: false },
    discountAcc: { val: false },
    skinAcc: { val: false },
    concernAcc: { val: false },
  });

  const [min, setMin] = useState(152);
  const [max, setMax] = useState(699);

  const openCollapseHandler = (id) => {
    setShow((prev) => ({
      ...prev,
      [id]: { val: !prev[id].val },
    }));
  };

  return (
    <div className="filter-sidebar-wrapper">
      <div className="filter-sidebar-content">
        {filterOptions.map((data) => {
          return (
            <div key={data.id} className="all-filter-wrapper">
              {data?.type === "tags" && (
                <div className="tagsTypeStyle">
                  {data?.showName && (
                    <div className="filterName-Style">
                      <div>{data?.filterName}</div>
                    </div>
                  )}
                  <div className="tagOptionsStyling">
                    {data?.options?.map((op, idx) => (
                      <div key={idx} className="singleTagCss">
                        {op}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {data?.type === "checkbox" && (
                <div className="checkboxTypeStyle">
                  {data?.showName && (
                    <div className="filterName-Style">
                      <div>{data?.filterName}</div>
                      <div>
                        <BiChevronDown />
                      </div>
                    </div>
                  )}
                  {data.options.map((op, idx) => (
                    <div key={idx} className="filter-checkbox-div">
                      <div className="single-checkbox-style">
                        <input type="checkbox" id={op} />
                        <label htmlFor={op}>{op}</label>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {data?.type === "range" && (
                <div className="rangeTypeStyle">
                  {data?.showName && (
                    <div className="filterName-Style">
                      <div>{data?.filterName}</div>
                    </div>
                  )}
                  <div className="range-values-container">
                    <div className="range-values">
                      <div className="range-values-child">
                        From <span>{min}</span> $
                      </div>
                      <div className="range-values-child">
                        Up to <span>{max}</span> $
                      </div>
                    </div>

                    <div className="range-slider-div">
                      <ReactSlider
                        defaultValue={[min, max]}
                        className="slider"
                        trackClassName="tracker"
                        min={0}
                        max={1000}
                        minDistance={1}
                        step={1}
                        withTracks={true}
                        pearling={true}
                        renderThumb={(props) => {
                          return <div {...props} className="thumb"></div>;
                        }}
                        renderTrack={(props) => {
                          return <div {...props} className="track"></div>;
                        }}
                        onChange={([min, max]) => {
                          setMin(min);
                          setMax(max);
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
              {data?.type === "accordian" && (
                <div className="accordianTypeStyle">
                  {data?.showName && (
                    <div
                      className="filterName-Style"
                      onClick={() => openCollapseHandler(data.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <div>{data?.filterName}</div>
                      <div className="open-collapse-btn">
                        {show[data.id]["val"] === true ? (
                          <BiChevronUp style={{ fontSize: "2.5rem" }} />
                        ) : (
                          <BiChevronDown style={{ fontSize: "2.5rem" }} />
                        )}
                      </div>
                    </div>
                  )}
                  <div
                    className={
                      show[data.id]["val"] === true
                        ? "accordian-options open-accordian"
                        : "accordian-options"
                    }
                  >
                    {data.options.map((op, idx) => (
                      <div key={idx} className="filter-checkbox-div">
                        <div className="single-checkbox-style">
                          <input type="checkbox" id={op} />
                          <label htmlFor={op}>{op}</label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div className="filter-action-buttons">
          <div className="filter-action--apply-btn">Apply Filter</div>
          <div className="filter-action--trash-btn">
            <FiTrash2 className="trashIconStyle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
