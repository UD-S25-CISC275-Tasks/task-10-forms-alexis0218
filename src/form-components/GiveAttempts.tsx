import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [chgAtmpt, setChgAtmpt] = useState<string>("");

    function updateChgAtmpt(event: React.ChangeEvent<HTMLInputElement>) {
        setChgAtmpt(event.target.value);
    }

    function updateAttempts() {
        if (chgAtmpt) {
            const num = parseInt(chgAtmpt);
            setAttempts(attempts + num);
        }
    }

    function use() {
        setAttempts(attempts - 1);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>
                {attempts}
                <Button onClick={updateAttempts}>Gain</Button>
                <Button onClick={use} disabled={attempts > 0 ? false : true}>
                    Use
                </Button>
                <Form.Group controlId="formAnswer">
                    <Form.Label>Attempts:</Form.Label>
                    <Form.Control
                        value={chgAtmpt}
                        type="number"
                        onChange={updateChgAtmpt}
                    />
                </Form.Group>
            </div>
        </div>
    );
}
