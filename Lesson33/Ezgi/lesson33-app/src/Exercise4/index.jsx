export const Exercise4 = () => {
    const items = ["item1", "item2", "item3", "item4"];

    function clickHandler(item) {
        alert(`${item} is clicked!`);
    }
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index} onClick={() => clickHandler(item)}> {item} </li>
            ))}
        </ul>
    );
}






