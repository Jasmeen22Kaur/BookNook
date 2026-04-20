const books = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        description: "Set in the racially divided American South, this novel follows Scout Finch as her father, Atticus, defends a Black man falsely accused of assault. Through a child’s perspective, it explores prejudice, empathy, and justice. The story emphasizes moral courage and the importance of understanding others, even in a society shaped by deep inequality.",
        imageUrl: "https://example.com/images/to-kill-a-mockingbird.jpg"
    },
    {
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        description: "In a surveillance-driven totalitarian state, Winston Smith secretly rebels against a regime that manipulates truth and controls every aspect of life. As he searches for freedom and meaning, he faces the crushing power of authority. The novel explores themes of propaganda, identity, and resistance, offering a stark warning about authoritarian control.",
        imageUrl: "https://example.com/images/1984.jpg"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        description: "Elizabeth Bennet navigates societal expectations, family pressures, and personal bias in early 19th-century England. Her evolving relationship with Mr. Darcy highlights the importance of self-awareness and growth. The novel blends humor with social critique, examining class, marriage, and morality while celebrating love grounded in mutual respect.",
        imageUrl: "https://example.com/images/pride-and-prejudice.jpg"
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        description: "Bilbo Baggins is drawn into an unexpected adventure with dwarves seeking to reclaim their homeland. Along the journey, he faces trolls, goblins, and a dragon, discovering courage and wit within himself. The story is a rich fantasy tale about growth, bravery, and the rewards of stepping beyond comfort zones.",
        imageUrl: "https://example.com/images/the-hobbit.jpg"
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Classic",
        description: "Narrated by Nick Carraway, this novel explores the mysterious Jay Gatsby and his obsession with Daisy Buchanan. Set during the Jazz Age, it critiques wealth, excess, and the illusion of the American Dream. Beneath the glamour lies a story of longing, disillusionment, and unattainable ideals.",
        imageUrl: "https://example.com/images/great-gatsby.jpg"
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        genre: "Adventure",
        description: "Ishmael narrates the obsessive quest of Captain Ahab to hunt the legendary white whale. The journey becomes a symbolic exploration of revenge, fate, and humanity’s struggle against nature. Rich with philosophical depth, the novel examines obsession and the limits of human control.",
        imageUrl: "https://example.com/images/moby-dick.jpg"
    },
    {
        title: "War and Peace",
        author: "Leo Tolstoy",
        genre: "Historical Fiction",
        description: "Set during the Napoleonic Wars, this epic novel interweaves the lives of Russian aristocratic families. It examines love, war, politics, and personal transformation. Through detailed characters and sweeping narrative, it reflects on history, fate, and the complexity of human experience.",
        imageUrl: "https://example.com/images/war-and-peace.jpg"
    },
    {
        title: "Crime and Punishment",
        author: "Fyodor Dostoevsky",
        genre: "Psychological Fiction",
        description: "Raskolnikov, a struggling student, commits a crime believing himself above moral law. As guilt and paranoia consume him, he confronts the consequences of his actions. The novel delves into morality, redemption, and the psychological burden of wrongdoing.",
        imageUrl: "https://example.com/images/crime-and-punishment.jpg"
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Coming-of-Age",
        description: "Holden Caulfield recounts his experiences after being expelled from school. Wandering through New York City, he grapples with loneliness and identity. The novel captures adolescent confusion and the struggle to find authenticity in a world he perceives as superficial.",
        imageUrl: "https://example.com/images/catcher-in-the-rye.jpg"
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: "Dystopian",
        description: "In a technologically controlled society, people are conditioned for happiness and stability at the cost of individuality. The novel questions the meaning of freedom and the price of comfort. It explores themes of control, conformity, and the loss of human depth.",
        imageUrl: "https://example.com/images/brave-new-world.jpg"
    },
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Adventure",
        description: "Santiago, a shepherd boy, dreams of finding treasure and sets off on a journey of self-discovery. Along the way, he learns to listen to his heart and recognize opportunities. The story blends philosophy and spirituality, emphasizing persistence and the pursuit of one’s personal legend.",
        imageUrl: "https://example.com/images/the-alchemist.jpg"
    },
    {
        title: "The Book Thief",
        author: "Markus Zusak",
        genre: "Historical Fiction",
        description: "Narrated by Death, this novel tells the story of Liesel, a young girl in Nazi Germany who finds comfort in stealing books and sharing them with others. It explores the power of words, the impact of war, and human resilience. The story is both heartbreaking and hopeful.",
        imageUrl: "https://example.com/images/the-book-thief.jpg"
    },
    {
        title: "The Kite Runner",
        author: "Khaled Hosseini",
        genre: "Drama",
        description: "This novel follows Amir, a boy from Kabul, and his complicated friendship with Hassan. Set against the backdrop of political turmoil in Afghanistan, it explores guilt, betrayal, and redemption. The story emphasizes the lasting impact of childhood actions and the possibility of forgiveness.",
        imageUrl: "https://example.com/images/the-kite-runner.jpg"
    },
    {
        title: "Jane Eyre",
        author: "Charlotte Brontë",
        genre: "Classic",
        description: "Jane Eyre, an orphan, grows into a strong and independent woman despite hardship. Her relationship with Mr. Rochester challenges social norms and personal values. The novel blends romance, mystery, and social critique while exploring themes of identity, morality, and resilience.",
        imageUrl: "https://example.com/images/jane-eyre.jpg"
    },
    {
        title: "Wuthering Heights",
        author: "Emily Brontë",
        genre: "Classic",
        description: "This intense novel tells the story of Heathcliff and Catherine, whose passionate but destructive relationship shapes generations. Set on the Yorkshire moors, it explores love, revenge, and obsession. The narrative’s dark tone and complex characters make it a powerful exploration of human emotion.",
        imageUrl: "https://example.com/images/wuthering-heights.jpg"
    },
    {
        title: "Great Expectations",
        author: "Charles Dickens",
        genre: "Classic",
        description: "Pip, an orphan, rises from humble beginnings with the help of a mysterious benefactor. As he navigates wealth and society, he learns harsh truths about ambition and identity. The novel critiques class and explores personal growth and moral development.",
        imageUrl: "https://example.com/images/great-expectations.jpg"
    },
    {
        title: "Les Misérables",
        author: "Victor Hugo",
        genre: "Historical Fiction",
        description: "Jean Valjean seeks redemption after years in prison, while being pursued by Inspector Javert. Set in post-revolutionary France, the novel explores justice, love, and sacrifice. It paints a vivid picture of social inequality and human resilience.",
        imageUrl: "https://example.com/images/les-miserables.jpg"
    },
    {
        title: "Anna Karenina",
        author: "Leo Tolstoy",
        genre: "Classic",
        description: "Anna’s passionate affair challenges societal norms and leads to tragic consequences. Parallel stories explore love, family, and faith. The novel offers a deep examination of human relationships and moral dilemmas.",
        imageUrl: "https://example.com/images/anna-karenina.jpg"
    },
    {
        title: "The Brothers Karamazov",
        author: "Fyodor Dostoevsky",
        genre: "Philosophical Fiction",
        description: "This novel explores faith, doubt, and morality through the lives of three brothers. Their relationships and conflicts reflect broader philosophical questions about existence and free will.",
        imageUrl: "https://example.com/images/brothers-karamazov.jpg"
    },
    {
        title: "The Odyssey",
        author: "Homer",
        genre: "Epic",
        description: "Odysseus embarks on a long journey home after the Trojan War, facing monsters, gods, and trials. The epic explores heroism, loyalty, and perseverance.",
        imageUrl: "https://example.com/images/odyssey.jpg"
    },
    {
        title: "The Iliad",
        author: "Homer",
        genre: "Epic",
        description: "This epic recounts the events of the Trojan War, focusing on Achilles and themes of honor, rage, and fate. It remains a cornerstone of Western literature.",
        imageUrl: "https://example.com/images/iliad.jpg"
    },
    {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        genre: "Dystopian",
        description: "In a society where books are banned, firemen burn them. Montag begins to question his role and seeks knowledge. The novel explores censorship and the value of literature.",
        imageUrl: "https://example.com/images/fahrenheit-451.jpg"
    },
    {
        title: "The Handmaid's Tale",
        author: "Margaret Atwood",
        genre: "Dystopian",
        description: "Set in a theocratic society, women are stripped of rights and used for reproduction. The story follows Offred’s struggle for survival and identity.",
        imageUrl: "https://example.com/images/handmaids-tale.jpg"
    },
    {
        title: "The Road",
        author: "Cormac McCarthy",
        genre: "Post-Apocalyptic",
        description: "A father and son travel through a devastated world, relying on each other for survival. The novel explores love, hope, and endurance in bleak circumstances.",
        imageUrl: "https://example.com/images/the-road.jpg"
    },
    {
        title: "Life of Pi",
        author: "Yann Martel",
        genre: "Adventure",
        description: "Pi survives a shipwreck and shares a lifeboat with a tiger. The story blends survival, imagination, and spirituality while exploring truth and storytelling.",
        imageUrl: "https://example.com/images/life-of-pi.jpg"
    },
    {
        title: "Harry Potter and the Sorcerer's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        description: "Harry discovers he is a wizard and attends Hogwarts School of Witchcraft and Wizardry. There, he makes friends and uncovers secrets about his past. The story introduces a magical world filled with wonder, friendship, and the battle between good and evil.",
        imageUrl: "https://example.com/images/hp1.jpg"
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: "J.K. Rowling",
        genre: "Fantasy",
        description: "Harry returns to Hogwarts where a mysterious force is petrifying students. As he investigates, he uncovers the legend of the Chamber of Secrets. The story expands the magical world while deepening themes of identity and courage.",
        imageUrl: "https://example.com/images/hp2.jpg"
    },
    {
        title: "Harry Potter and the Prisoner of Azkaban",
        author: "J.K. Rowling",
        genre: "Fantasy",
        description: "A dangerous prisoner escapes, and Harry learns more about his parents’ past. As secrets unfold, he faces new dangers and emotional challenges. The novel explores friendship, loyalty, and the complexity of truth.",
        imageUrl: "https://example.com/images/hp3.jpg"
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        genre: "Fantasy",
        description: "Harry is unexpectedly entered into a dangerous magical tournament. Facing life-threatening tasks, he uncovers a dark plot. The story marks a turning point toward darker themes and rising danger.",
        imageUrl: "https://example.com/images/hp4.jpg"
    },
    {
        title: "Harry Potter and the Order of the Phoenix",
        author: "J.K. Rowling",
        genre: "Fantasy",
        description: "As the wizarding world denies Voldemort’s return, Harry forms a secret group to prepare for battle. The novel explores authority, resistance, and emotional struggles during adolescence.",
        imageUrl: "https://example.com/images/hp5.jpg"
    },
    {
        title: "Harry Potter and the Half-Blood Prince",
        author: "J.K. Rowling",
        genre: "Fantasy",
        description: "Harry learns more about Voldemort’s past while facing growing threats. Relationships deepen, and the story builds toward a tragic climax. Themes of trust, sacrifice, and destiny are central.",
        imageUrl: "https://example.com/images/hp6.jpg"
    },
    {
        title: "Harry Potter and the Deathly Hallows",
        author: "J.K. Rowling",
        genre: "Fantasy",
        description: "Harry, Ron, and Hermione set out to destroy Voldemort’s Horcruxes. The journey tests their friendship and courage. The series concludes with a battle between good and evil, emphasizing sacrifice and hope.",
        imageUrl: "https://example.com/images/hp7.jpg"
    },
    {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        description: "Frodo begins his journey to destroy a powerful ring that threatens Middle-earth. Joined by a fellowship, he faces danger and temptation. The story introduces a richly detailed world and epic quest.",
        imageUrl: "https://example.com/images/lotr1.jpg"
    },
    {
        title: "The Lord of the Rings: The Two Towers",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        description: "The fellowship is divided as each member continues the quest. Battles intensify, and alliances are tested. The novel expands the scale of conflict and character development.",
        imageUrl: "https://example.com/images/lotr2.jpg"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        description: "The final confrontation with evil unfolds as Frodo nears Mount Doom. Armies clash, and sacrifices are made. The story concludes with themes of courage, friendship, and the restoration of peace.",
        imageUrl: "https://example.com/images/lotr3.jpg"
    },
    {
        title: "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        genre: "Fantasy",
        description: "Four siblings enter a magical land ruled by a tyrannical witch. With the help of Aslan, they fight to restore peace. The story blends fantasy with themes of bravery, sacrifice, and redemption.",
        imageUrl: "https://example.com/images/narnia.jpg"
    },
    {
        title: "The Fault in Our Stars",
        author: "John Green",
        genre: "Romance",
        description: "Hazel and Augustus, both dealing with illness, form a deep connection. Their journey explores love, mortality, and meaning. The novel balances humor and heartbreak with emotional honesty.",
        imageUrl: "https://example.com/images/fault-in-our-stars.jpg"
    },
    {
        title: "Twilight",
        author: "Stephenie Meyer",
        genre: "Fantasy Romance",
        description: "Bella Swan falls in love with Edward Cullen, a vampire. Their relationship is tested by danger and secrecy. The novel combines romance and supernatural elements with themes of identity and choice.",
        imageUrl: "https://example.com/images/twilight.jpg"
    },
    {
        title: "The Maze Runner",
        author: "James Dashner",
        genre: "Dystopian",
        description: "Thomas wakes up in a mysterious maze with no memory of his past. As he and others try to escape, they uncover secrets about their situation. The story emphasizes survival, teamwork, and mystery.",
        imageUrl: "https://example.com/images/maze-runner.jpg"
    },
    {
        title: "Gone Girl",
        author: "Gillian Flynn",
        genre: "Thriller",
        description: "When Amy Dunne disappears, suspicion falls on her husband Nick. As the investigation unfolds, shocking truths emerge about their marriage. The novel explores manipulation, perception, and the dark sides of relationships, keeping readers guessing until the end.",
        imageUrl: "https://example.com/images/gone-girl.jpg"
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Dystopian",
        description: "Katniss Everdeen volunteers to take her sister’s place in a deadly televised competition. Set in a dystopian future, the story explores survival, inequality, and resistance. Katniss becomes a symbol of defiance against oppression.",
        imageUrl: "https://example.com/images/hunger-games.jpg"
    },
    {
        title: "Catching Fire",
        author: "Suzanne Collins",
        genre: "Dystopian",
        description: "After surviving the Hunger Games, Katniss faces new threats as rebellion grows. Forced back into the arena, she must fight for survival again while becoming a symbol of hope. The story deepens themes of power and resistance.",
        imageUrl: "https://example.com/images/catching-fire.jpg"
    },
    {
        title: "Ready Player One",
        author: "Ernest Cline",
        genre: "Science Fiction",
        description: "In a future dominated by a virtual reality world, Wade Watts searches for a hidden prize left by its creator. The quest is filled with puzzles, competition, and danger. The novel blends pop culture nostalgia with themes of identity and escapism.",
        imageUrl: "https://example.com/images/ready-player-one.jpg"
    },
    {
        title: "The Girl on the Train",
        author: "Paula Hawkins",
        genre: "Thriller",
        description: "Rachel observes a seemingly perfect couple during her daily commute, until she becomes entangled in a missing person case. As secrets unravel, her unreliable perspective complicates the truth. The novel explores memory, obsession, and deception.",
        imageUrl: "https://example.com/images/girl-on-train.jpg"
    },
    {
        title: "Big Little Lies",
        author: "Liane Moriarty",
        genre: "Drama",
        description: "Set in a coastal town, the novel follows three women whose lives intertwine through friendships, secrets, and conflict. As tensions build, a shocking event brings hidden truths to light. The story examines relationships, parenting, and the complexity of appearances.",
        imageUrl: "https://example.com/images/big-little-lies.jpg"
    },
    {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "Thriller",
        description: "Alicia Berenson stops speaking after being accused of murdering her husband. A psychotherapist becomes obsessed with uncovering her motive. The novel unfolds as a psychological mystery filled with twists, exploring trauma, silence, and truth.",
        imageUrl: "https://example.com/images/silent-patient.jpg"
    },
    {
        title: "The Night Circus",
        author: "Erin Morgenstern",
        genre: "Fantasy",
        description: "A mysterious circus appears without warning, hosting a magical competition between two young illusionists. As their rivalry deepens into romance, the stakes grow higher. The novel blends romance and fantasy with vivid imagery and atmosphere.",
        imageUrl: "https://example.com/images/night-circus.jpg"
    },
    {
        title: "Circe",
        author: "Madeline Miller",
        genre: "Fantasy",
        description: "Circe, a lesser-known figure from Greek mythology, is reimagined as a powerful and independent woman. Banished to an island, she discovers her abilities and identity. The novel explores transformation, power, and self-discovery through mythological storytelling.",
        imageUrl: "https://example.com/images/circe.jpg"
    },
    {
        title: "A Storm of Swords",
        author: "George R.R. Martin",
        genre: "Fantasy",
        description: "War and betrayal reach new heights as alliances collapse and unexpected events reshape the story. The novel is known for shocking twists and character-driven drama.",
        imageUrl: "https://example.com/images/got3.jpg"
    },
    {
        title: "A Feast for Crows",
        author: "George R.R. Martin",
        genre: "Fantasy",
        description: "After the chaos of war, characters deal with its consequences. The focus shifts to political rebuilding and personal struggles. The novel explores aftermath and shifting power.",
        imageUrl: "https://example.com/images/got4.jpg"
    },
    {
        title: "A Dance with Dragons",
        author: "George R.R. Martin",
        genre: "Fantasy",
        description: "Parallel storylines unfold as characters face new challenges across the realm. The novel continues to build toward larger conflicts and resolutions.",
        imageUrl: "https://example.com/images/got5.jpg"
    },
    {
        title: "Invisible Man",
        author: "Ralph Ellison",
        genre: "Fiction",
        description: "The unnamed narrator reflects on his experiences as a Black man in America. The novel explores identity, invisibility, and social inequality.",
        imageUrl: "https://example.com/images/invisible-man.jpg"
    },
    {
        title: "Slaughterhouse-Five",
        author: "Kurt Vonnegut",
        genre: "Science Fiction",
        description: "Billy Pilgrim becomes unstuck in time, reliving moments from his life, including World War II. The novel blends satire and science fiction to explore trauma and fate.",
        imageUrl: "https://example.com/images/slaughterhouse-five.jpg"
    },
    {
        title: "Catch-22",
        author: "Joseph Heller",
        genre: "Satire",
        description: "Set during World War II, the novel follows soldiers trapped in absurd bureaucratic rules. It critiques war and logic through dark humor.",
        imageUrl: "https://example.com/images/catch-22.jpg"
    },
    {
        title: "The Sun Also Rises",
        author: "Ernest Hemingway",
        genre: "Classic",
        description: "A group of expatriates travel through Europe after World War I, searching for meaning. The novel reflects disillusionment and lost purpose.",
        imageUrl: "https://example.com/images/sun-also-rises.jpg"
    },

];

const seedBooks = (db) => {
    db.serialize(() => {
        db.run(`CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            author TEXT,
            genre TEXT,
            description TEXT,
            imageUrl TEXT
        )`);
        
        const stmt = db.prepare('INSERT INTO books (title, author, genre, description, imageUrl) VALUES (?, ?, ?, ?, ?)');

        for (const book of books) {
            stmt.run(book.title, book.author, book.genre, book.description, book.imageUrl, (err) => {
                if (err) console.error('Error inserting', book.title, err);
                else console.log('Inserted', book.title);
            });
        }

        stmt.finalize();
    });
};

module.exports = { books, seedBooks };

if (require.main === module) {
    const db = require('./database');
    seedBooks(db);
    setTimeout(() => {
        db.close();
        console.log('Database connection closed.');
    }, 3000);
}

