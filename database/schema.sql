CREATE TABLE lorem (info TEXT);

CREATE TABLE user (
    user_id INTEGER PRIMARY KEY,
    full_name TEXT,
    email TEXT
);

CREATE TABLE item (
    item_id
    INTEGER PRIMARY KEY,
    name TEXT,
    description TEXT,
    ingredients TEXT,
    price INT,
    percent_discount DECIMAL(5, 4) DEFAULT 0,
    kind TEXT,
    available BOOLEAN DEFAULT 1
);

CREATE TABLE `order` (
    order_id
    INTEGER PRIMARY KEY,
    user_id INT,
    amount INT,
    items TEXT,
    FOREIGN KEY(user_id) REFERENCES user(user_id)
);

INSERT INTO
    user (full_name, email)
VALUES
    ('Alice', 'alice@example.com');

INSERT INTO
    item (name, description, ingredients, price, kind)
VALUES
    (
        'Squid and miso soup',
        'Squid and brown miso combined into smooth soup',
        'garlic | squid | miso',
        78,
        'starter'
    ),
    (
        'Avocado and aubergine maki',
        'Toasted seaweed wrapped around sushi rice,  filled with fresh avocado and chargrilled aubergine',
        'rice | rice vinegar | sugar | avocado | aubergine',
        15,
        'starter'
    ),
    (
        'Squash and nectarine wontons',
        'Thin wonton cases stuffed with butternut squash and fresh nectarine',
        'flour | water | salt | onions | squash | nectarine',
        42,
        'starter'
    ),
    (
        'Pepper and ginger soup',
        'Baby pepper and fresh ginger combined into chunky soup',
        'garlic | pepper | ginger',
        15,
        'starter'
    ),
    (
        'Salmon and feta wontons',
        'Thin wonton cases stuffed with smoked salmon and tangy feta',
        'flour | water | salt | onions | salmon | feta',
        17,
        'starter'
    ),
    (
        'Leek and tamarind soup',
        'Frizzled leek and fresh tamarind combined into chunky soup',
        'onion | leek | tamarind',
        5,
        'starter'
    ),
    (
        'Tofu and orange soup',
        'Marinaded tofu and juicy orange combined into chunky soup',
        'onion | tofu | orange',
        100,
        'starter'
    ),
    (
        'Scallop and pheasant parcels',
        'Thin filo pastry cases stuffed with scallop and pheasant',
        'flour | water | salt | onions | scallop | pheasant',
        31,
        'starter'
    ),
    (
        'Parsley and feta gyoza',
        'Thin pastry cases stuffed with flat-leaf parsley and tangy feta',
        'flour | water | salt | onions | parsley | feta',
        57,
        'starter'
    ),
    (
        'Chicken and apple dumplings',
        'Thin pastry cases stuffed with corn-fed chicken and red apple',
        'flour | water | salt | onions | chicken | apple',
        4,
        'starter'
    );