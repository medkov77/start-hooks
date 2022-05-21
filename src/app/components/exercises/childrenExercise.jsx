import React from "react";
import CollapseWrapper from "../common/collapse";
const NuberedComponents = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        return (
            <div className="d-flex">
                {`${index + 1}.`} {child}
            </div>
        );
    });
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <NuberedComponents>
                <Component />
                <Component />
                <Component />
            </NuberedComponents>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
