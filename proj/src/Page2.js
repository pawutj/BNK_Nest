import React, { useState } from "react";
import data from "./sample.json";
import { dataToJSONObject, range, stringToInterger, category } from "./util";
import Option from "./Option";
import DonutChart from "react-donut-chart";
const index = 0;
const dataObject = dataToJSONObject(data);
const dataPieObject = range(10).map((i) => {
  return {
    label: category[i],
    value: stringToInterger(dataObject[index][`f${i + 1}_sum`]),
  };
});
function Page2() {
  const [filter, setFilter] = useState(1);

  return (
    <div style={{ fontFamily: `'Kanit', sans-serif` }}>
      <div>
        <h1>{dataObject[index].name}</h1>
        <button
          onClick={() => {
            console.log(dataObject);
          }}
        >
          {"saraku"}
        </button>
        <Option setFilter={setFilter} />
      </div>
      <div
        style={{
          gridTemplateColumns: `1fr 1fr 1fr`,
          gridTemplateRows: `1fr 1fr 1fr`,
          display: "grid",
          gridTemplateAreas: `
                    'main1 main2 main3'
                    'main4 main5 main6'
                    'main7 main7 main7'
                `,
          height: 400,
          width: 900,
        }}
      >
        <div style={{ backgroundColor: "pink", gridArea: "main1" }}></div>
        <div style={{ gridArea: "main2", margin: "auto" }}>
          <p>งบปีปัจจุบัน</p>
          <p>{dataObject[index][`f${filter}_sum`]} บาท</p>
        </div>
        <div style={{ gridArea: "main3" }}></div>
        <div style={{ gridArea: "main4", margin: "auto" }}>
          {dataObject[index][`f${filter}_data_f`]
            .replace(/_$/g, "")
            .split("_")
            .map((s, i) => (
              <p>
                {i}.{s} บาท
              </p>
            ))}
        </div>
        <div style={{ backgroundColor: "blue", gridArea: "main5" }}></div>
        <div style={{ backgroundColor: "#2ec1ac", gridArea: "main6" }}></div>
        <div style={{ gridArea: "main7" }}>
          <DonutChart data={dataPieObject} width={400} />
        </div>
      </div>
    </div>
  );
}

export default Page2;
