const TodoList = () => {
    const details = {
        name: "hedy Lamarr's Todos",
        imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CEBdqpSbCF-F2rvuqtDe5PKw7r6ztxFQR6IUepcMBZL43M6uw5xGzbX94Q&s",
        imageALT: "hedy Lamarr's",
        listItems: ["Invent new traffic lights", "Rehearse a movie scene", "Improve the spectrumtechnology"]
    }
    const { name: Sai, imageURL, imageALT: alternateText, listItems } = details
    return (
        <div>
            <h1>{Sai}</h1>
            <img src={imageURL}
                alt={alternateText}
                className="photo" />
            <ul>
                <li>{listItems[0]}</li>
                <li>{listItems[1]}</li>
                <li>{listItems[2]}</li>
            </ul>
            <button onClick={() => { alert("clicked") }}>click me</button>
        </div>
    )
}
export default TodoList

export const Table1 = () => {
    const content = {
        name: "Table",
        heading: "Name",
        head: "Age",
        data: ["archana", "navya", 21, 21]
    }

    const { heading, head, data } = content
    return (
        <div>
            <table>
                <tr>
                    <th>{heading}</th>
                    <th>{head}</th>
                </tr><tr>
                    <td>{data[0]}</td>
                    <td>{data[2]}</td>
                </tr><tr>
                    <td>{data[1]}</td>
                    <td>{data[3]}</td>
                </tr>
            </table>
        </div>
    )
}

export const List = () => {
    const contents = {
        list: ["Mango", "banana", "apple"],
        listI: ["red", "green", "yellow"]
    }
    const { list, listI } = contents
    return (
        <>
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
            <li>{listI[0]}</li>
            <li>{listI[1]}</li>
            <li>{listI[2]}</li>
        </>
    )
}

export const Forms = () => {
    const data = {
        input: ["text", "Archana"]
    }
    const [text, Archana] = data
    return (
        <>
          <Forms>
                <input type={"input"}/>
                <input type={"input"}/>
            </Forms>
        </>
    )
}