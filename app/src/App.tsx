import React, { FC, useState } from 'react';
import './index.scss';

const App: FC = () =>
{
    const [tasks, setTasks] = useState<string[]>([]);
    const [value, setValue] = useState<string>("");

    const addItem = (item: string) =>
    {
        const a = [...tasks];
        a.push(item);
        setTasks(a);
    }

    const removeItem = (index: number) =>
    {
        const a = [...tasks];
        a.splice(index, 1);
        setTasks(a);
    }

    return (
        <>
            <input
                type="text"
                placeholder="..."
                onChange={ ({ target: { value: v } }) => setValue(v) }
                value={ value }
            />
            <button onClick={() => {
                addItem(value);
                setValue("");
            }}>Add Task</button>
            <br />
            <ol>
                {
                    tasks.map((io: string, ia: number) => (
                        <li
                            key={ ia }
                            className="task"
                            onClick={ () => removeItem(ia) }>
                            { io }
                        </li>
                    ))
                }
            </ol>
        </>
    );
}

export default App;
