type SidebarProps = {
  sidebarData: string[];
  selectTag: (taf: string) => void;
  currentTag: string;
};

const active = {
  background: "red",
};

const Sidebar = ({ sidebarData, selectTag, currentTag }: SidebarProps) => {
  return (
    <ul className="list-group list-list-group-flush mt-5">
      {sidebarData.map((el, index) => {
        return (
          <button
            key={index}
            style={currentTag === el ? active : {}}
            className="btn btn-primary mb-2"
            onClick={() => selectTag(el)}
          >
            {el}
          </button>
        );
      })}
    </ul>
  );
};

export default Sidebar;
