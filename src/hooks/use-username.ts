import { faker } from "@faker-js/faker";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const STORAGE_KEY = "chat_username";

const generateUsername = () => {
  return `anonymous-${faker.person.firstName().toLowerCase()}-${nanoid(5)}`;
};

export const useUsername = () => {
    const [username, setUsername] = useState("");

    useEffect(() => {
    const main = () => {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        setUsername(stored);
        return;
      }

      const generated = generateUsername();
      localStorage.setItem(STORAGE_KEY, generated);
      setUsername(generated);
    };

    main();
  }, []);

  return { username };
}