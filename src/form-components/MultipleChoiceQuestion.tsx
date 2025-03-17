import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>("");

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multichoice">
                <Form.Label>Choose an Answer</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((choice: string) => (
                        <option key={choice}>{choice}</option>
                    ))}
                </Form.Select>
            </Form.Group>
            {expectedAnswer === choice ? "✔️" : "❌"}
        </div>
    );
}
