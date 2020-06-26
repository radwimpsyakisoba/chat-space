##  users
|Colum|type|Options|
|-----|----|-------|
|name|string|null: false|
|mail|text|null: false|
|password|string|null: false|

### Association
- has_many :messages
- has_many :groups, through: :groups_users
- belongs_to :groups_users

##  groups
|colum|type|Options|
|group_name|text|null :false|

### Association
- has_many :users, through: :groups_users
- has_many :messages
- belongs_to :groups_users

## groups_users
|colum|Type|Options|
|-----|----|-------|
|user_id|integer|null: false,foreign_key: true|
|group_id|integer|null: false,foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messages
|colum|Type|Options|
|-----|----|-------|
|text|text|null: false|
|image|text|null: false|
|user_id|integer|null: false,foreign_key: true|
|group_id|integer|null: false,foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group



