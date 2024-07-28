import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
  Avatar,
} from "@nextui-org/react";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import { navOptions } from "@/utils/constants";

const CategoryDropdown = () => {
  const router = useRouter();

  const handleItemClick = (path: string) => {
    router.push(path);
  };

  const optoinsList = navOptions.flatMap((r: any, index: any) => [
    <DropdownItem
      textValue={r}
      key={index}
      onClick={() =>
        handleItemClick(r === "Quotes" ? `/` : `/${r.toLocaleLowerCase()}`)
      }
    >
      {`${r}`}
    </DropdownItem>,
  ]);

  return (
    <Dropdown
      showArrow
      classNames={{
        base: "before:bg-default-200",
        content: "py-1 px-1 border border-default-200 bg-white rounded-lg",
      }}
    >
      <DropdownTrigger>
        <MenuIcon sx={{ color: "white" }} />
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="Dropdown menu with description"
        style={{
          maxHeight: "400px",
          overflowY: "auto",
        }}
      >
        <DropdownSection>{optoinsList}</DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CategoryDropdown;
