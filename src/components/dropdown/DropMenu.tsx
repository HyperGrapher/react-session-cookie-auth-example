/* eslint-disable @typescript-eslint/no-unused-vars */
import { IcPerson, PlusCircle } from "components/icons";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import "./style/Dropdown.scss";


export interface IMenuItems {
    icon: ReactNode;
    path: string;
    name: string;
}

type Props = {
    items: string[],
    callback: (str: string) => void;
}
const example: IMenuItems[] = [
    {
        icon: PlusCircle,
        path: '/home',
        name: 'Anasayfa'
    }, {
        icon: IcPerson,
        path: '/home',
        name: 'Anasayfa'
    },
]
// TODO Make menu reusable
// https://stackoverflow.com/a/37491578
const DropMenu: React.FC<Props> = ({ items, callback }) => {
    const [expanded, setExpanded] = useState(false);

    function expand() {
        setExpanded(true);
    }

    function close() {
        setExpanded(false);
    }

    function select(event: any) {
        const value = event.target.textContent as string;
        callback(value); // just console.log to see the clicked element
        close();
    }

    return (
        <div className="dropdown" tabIndex={0} onFocus={expand} onBlur={close} >
            {expanded ? (
                <div className={"dropdown-options-list"}>
                    {example.map((item) => (
                        <Link to={item.path}>
                            <div key={item.name} className={"dropdown-option"} onClick={select}>
                                {item.name}
                            </div>
                        </Link>
                    ))}
                </div>
            ) : null}
        </div>
    );
}

export default DropMenu

// ! Advanced EXAMPLE
// ! https://www.brockherion.dev/blog/posts/building-reusable-components-in-react-with-typescript-and-generics
/*
export default function Page() {
    const { data } = useData();
    // omitted
  
    return (
      <Listing
        items={data}
        render={(item) => (
          <>
            <span>{item.someProperty}</span>
            ...
          </>
        )}
      />
    );
  }

  */