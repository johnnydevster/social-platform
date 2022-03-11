import { Accordion } from "@mantine/core";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="rounded-lg hidden lg:block">
      <Accordion disableIconRotation>
        <Accordion.Item
          label="Category 1"
          className="border-b-0"
          classNames={{ control: "hover:bg-primary-50 rounded" }}
        >
          <ul className="flex flex-col space-y-3">
            <Link href="/random">
              <a>
                <li className="hover:bg-primary-50 p-2 rounded">Sublink 1</li>
              </a>
            </Link>
            <Link href="">
              <a>
                <li className="hover:bg-primary-50 p-2 rounded">Sublink 2</li>
              </a>
            </Link>
            <Link href="">
              <a>
                <li className="hover:bg-primary-50 p-2 rounded">Sublink 3</li>
              </a>
            </Link>
          </ul>
        </Accordion.Item>

        <Accordion.Item
          label="Category 2"
          className="border-b-0"
          classNames={{ control: "hover:bg-primary-50 rounded" }}
        >
          <ul className="flex flex-col space-y-3">
            <Link href="">
              <a>
                <li className="hover:bg-primary-50 p-2 rounded">Sublink 1</li>
              </a>
            </Link>
            <Link href="">
              <a>
                <li className="hover:bg-primary-50 p-2 rounded">Sublink 2</li>
              </a>
            </Link>
            <Link href="">
              <a>
                <li className="hover:bg-primary-50 p-2 rounded">Sublink 3</li>
              </a>
            </Link>
          </ul>
        </Accordion.Item>

        <Accordion.Item
          label="Category 3"
          className="border-b-0"
          classNames={{ control: "hover:bg-primary-50 rounded" }}
        >
          <ul className="flex flex-col space-y-3">
            <Link href="">
              <a>
                <li className="hover:bg-primary-50 p-2 rounded">Sublink 1</li>
              </a>
            </Link>
            <Link href="">
              <a>
                <li className="hover:bg-primary-50 p-2 rounded">Sublink 2</li>
              </a>
            </Link>
            <Link href="">
              <a>
                <li className="hover:bg-primary-50 p-2 rounded">Sublink 3</li>
              </a>
            </Link>
          </ul>
        </Accordion.Item>
      </Accordion>
    </nav>
  );
}
