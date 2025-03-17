import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [choice, setColor] = useState<string>("red");

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            <span>
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={<span style={{ backgroundColor: "red" }}>red</span>}
                    value={"red"}
                    checked={choice === "red"}
                />
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={
                        <span style={{ backgroundColor: "orange" }}>
                            orange
                        </span>
                    }
                    value={"orange"}
                    checked={choice === "orange"}
                />
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={
                        <span style={{ backgroundColor: "yellow" }}>
                            yellow
                        </span>
                    }
                    value={"yellow"}
                    checked={choice === "yellow"}
                />
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={
                        <span style={{ backgroundColor: "green" }}>green</span>
                    }
                    value={"green"}
                    checked={choice === "green"}
                />
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={
                        <span style={{ backgroundColor: "blue" }}>blue</span>
                    }
                    value={"blue"}
                    checked={choice === "blue"}
                />
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={
                        <span style={{ backgroundColor: "purple" }}>
                            purple
                        </span>
                    }
                    value={"purple"}
                    checked={choice === "purple"}
                />
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={
                        <span style={{ backgroundColor: "pink" }}>pink</span>
                    }
                    value={"pink"}
                    checked={choice === "pink"}
                />
                <Form.Check
                    type="radio"
                    name="color"
                    onChange={updateColor}
                    id="color"
                    label={
                        <span style={{ backgroundColor: "black" }}>black</span>
                    }
                    value={"black"}
                    checked={choice === "black"}
                />
            </span>
            <div>You have chosen </div>
            <div data-testid="colored-box" style={{ backgroundColor: choice }}>
                {choice}
            </div>
        </div>
    );
}
