import * as React from "react";
import { useState } from "react";
import * as ReactDOM from "react-dom";

const appDiv = document.getElementById("app");

if (!(appDiv instanceof HTMLDivElement)) {
  throw new Error("No div with id 'app' found");
}

interface Images {
  id: number;
  webformatURL: string;
}

const App = (): JSX.Element => {
  const [images, setImages] = useState<Images[] | null>(null);
  const [value, setValue] = useState("");
  const [text, setText] = useState("Type something to search for photos");

  const IMAGE_URL = new URL(
    "https://pixabay.com/api/"
  );
  IMAGE_URL.searchParams.append("key", "22076185-8c3db306e8ad607345e161e46");
  IMAGE_URL.searchParams.append("q", value);
  IMAGE_URL.searchParams.append("per_page", "10");
  IMAGE_URL.searchParams.append("image_type", "photo");

  const fetchImages = async () => {
    const response = await fetch(IMAGE_URL.toString());
    const json = await response.json();
    const allImages = json.hits;
    setImages(allImages);
    setText("There is no matching photo found!");
  };

  return (
    <main>
      <section className="searchSection">
        <div className="searchBoxDiv">
          <div>
            <input type="search" id="search" placeholder="Search..." onChange={(e) => setValue(e.target.value)}/>
            <button onClick={fetchImages}>Search</button>
          </div>
        </div>
      </section>
      <section className="imageResultSection">
        <div className="imageContainer">
          {!images || images.length === 0 ? (
            <h4 className="infoText">{text}</h4>
          ) : (
            images.map((image) => {
              return (
				  <div className="imageDivLi">
					<li key={image.id}>
						<img src={image.webformatURL} alt="" />
					</li>
				  </div>
              );
            })
          )}
        </div>
      </section>
    </main>
  );
};

ReactDOM.render(<App />, appDiv);
