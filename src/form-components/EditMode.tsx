import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [username, setUsername] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(false);

    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditing(event.target.checked);
    }

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setUsername(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="isEditing"
                label="Editing"
                checked={isEditing}
                onChange={updateEditing}
            />
            <div hidden={isEditing}>
                <div hidden={!isStudent}>{username} is a student.</div>
                <div hidden={isStudent}>{username} is not a student.</div>
            </div>
            <div hidden={!isEditing}>
                <Form.Group controlId="username">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={username} onChange={updateName} />
                </Form.Group>
                <Form.Check
                    type="checkbox"
                    id="isstudent"
                    label="Are you a student?"
                    checked={isStudent}
                    onChange={updateStudent}
                />
            </div>
        </div>
    );
}
