##  users
|Colum|type|Options|
|-----|----|-------|
|name|string|null: false|
|mail|text|null: false|
|password|string|null: false|

### Association
- belongs_to :messages
- belongs_to :group

##  groups
|colum|type|Options|
|group_name|text|null :false|

### Association
- belongs_to :user
- belongs_to :messages

## groups_users
|colum|Type|Options|
|-----|----|-------|
|user_id|integer|null: false,foreign_key: true|
|group_id|integer|null: false,foreign_key: true|

### Association
- has_many :groups
- has_many :users


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



