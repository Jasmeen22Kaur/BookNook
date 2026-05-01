const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    description: "Set in the racially divided American South, this novel follows Scout Finch as her father, Atticus, defends a Black man falsely accused of assault. Through a child’s perspective, it explores prejudice, empathy, and justice. The story emphasizes moral courage and the importance of understanding others, even in a society shaped by deep inequality.",
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    description: "In a surveillance-driven totalitarian state, Winston Smith secretly rebels against a regime that manipulates truth and controls every aspect of life. As he searches for freedom and meaning, he faces the crushing power of authority. The novel explores themes of propaganda, identity, and resistance, offering a stark warning about authoritarian control.",
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    description: "Elizabeth Bennet navigates societal expectations, family pressures, and personal bias in early 19th-century England. Her evolving relationship with Mr. Darcy highlights the importance of self-awareness and growth. The novel blends humor with social critique, examining class, marriage, and morality while celebrating love grounded in mutual respect.",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    description: "Bilbo Baggins is drawn into an unexpected adventure with dwarves seeking to reclaim their homeland. Along the journey, he faces trolls, goblins, and a dragon, discovering courage and wit within himself. The story is a rich fantasy tale about growth, bravery, and the rewards of stepping beyond comfort zones.",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
    description: "Narrated by Nick Carraway, this novel explores the mysterious Jay Gatsby and his obsession with Daisy Buchanan. Set during the Jazz Age, it critiques wealth, excess, and the illusion of the American Dream. Beneath the glamour lies a story of longing, disillusionment, and unattainable ideals.",
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    genre: "Historical Fiction",
    description: "Set during the Napoleonic Wars, this epic novel interweaves the lives of Russian aristocratic families. It examines love, war, politics, and personal transformation. Through detailed characters and sweeping narrative, it reflects on history, fate, and the complexity of human experience.",
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    genre: "Psychological Fiction",
    description: "Raskolnikov, a struggling student, commits a crime believing himself above moral law. As guilt and paranoia consume him, he confronts the consequences of his actions. The novel delves into morality, redemption, and the psychological burden of wrongdoing.",
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Coming-of-Age",
    description: "Raskolnikov, a struggling student, commits a crime believing himself above moral law. As guilt and paranoia consume him, he confronts the consequences of his actions. The novel delves into morality, redemption, and the psychological burden of wrongdoing.",
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    genre: "Dystopian",
    description: "In a technologically controlled society, people are conditioned for happiness and stability at the cost of individuality. The novel questions the meaning of freedom and the price of comfort. It explores themes of control, conformity, and the loss of human depth.",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    description: "Santiago, a shepherd boy, dreams of finding treasure and sets off on a journey of self-discovery. Along the way, he learns to listen to his heart and recognize opportunities. The story blends philosophy and spirituality, emphasizing persistence and the pursuit of one’s personal legend.",
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    genre: "Historical Fiction",
    description: "Narrated by Death, this novel tells the story of Liesel, a young girl in Nazi Germany who finds comfort in stealing books and sharing them with others. It explores the power of words, the impact of war, and human resilience. The story is both heartbreaking and hopeful.",
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Drama",
    description: "This novel follows Amir, a boy from Kabul, and his complicated friendship with Hassan. Set against the backdrop of political turmoil in Afghanistan, it explores guilt, betrayal, and redemption. The story emphasizes the lasting impact of childhood actions and the possibility of forgiveness.",
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    genre: "Classic",
    description: "Jane Eyre, an orphan, grows into a strong and independent woman despite hardship. Her relationship with Mr. Rochester challenges social norms and personal values. The novel blends romance, mystery, and social critique while exploring themes of identity, morality, and resilience.",
  },
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    genre: "Classic",
    description: "Pip, an orphan, rises from humble beginnings with the help of a mysterious benefactor. As he navigates wealth and society, he learns harsh truths about ambition and identity. The novel critiques class and explores personal growth and moral development.",
  },
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    genre: "Historical Fiction",
    description: "Jean Valjean seeks redemption after years in prison, while being pursued by Inspector Javert. Set in post-revolutionary France, the novel explores justice, love, and sacrifice. It paints a vivid picture of social inequality and human resilience.",
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    genre: "Classic",
    description: "Anna’s passionate affair challenges societal norms and leads to tragic consequences. Parallel stories explore love, family, and faith. The novel offers a deep examination of human relationships and moral dilemmas.",
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    genre: "Philosophical Fiction",
    description: "This novel explores faith, doubt, and morality through the lives of three brothers. Their relationships and conflicts reflect broader philosophical questions about existence and free will.",
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    genre: "Dystopian",
    description: "A world where books are banned and burned.",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Dystopian",
    description: "A deadly competition in a dystopian future.",
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    description: "A young wizard discovers his magical destiny.",
  }
];

const seedBooks = (db) => {
  db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS books (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      author TEXT,
      genre TEXT,
      description TEXT
    )`);

    const stmt = db.prepare(
      "INSERT INTO books (title, author, genre, description) VALUES (?, ?, ?, ?)"
    );

    for (const book of books) {
      stmt.run(
        book.title,
        book.author,
        book.genre,
        book.description,
        (err) => {
          if (err) console.error("Error inserting", book.title, err);
          else console.log("Inserted", book.title);
        }
      );
    }

    stmt.finalize();
  });
};


if (require.main === module) {
  const db = require("./database");
  seedBooks(db);

  setTimeout(() => {
    db.close();
    console.log("Database connection closed.");
  }, 3000);
}

module.exports = { books, seedBooks };
