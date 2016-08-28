# Usage
## GetAll
- method
  - get
- url
  - https://moyopi.herokuapp.com/events

## GetByEventId
- method
  - get
- url
  - https://moyopi.herokuapp.com/events?event_id=${X}

## Add
- method
  - post
- url
  - https://moyopi.herokuapp.com/events
- form-data
  - event_name
  - event_date
  - event_place
  - event_capacity
  - event_fee
  - created_by
- example

```
curl  -X POST \
--data \
"\
event_name=kyojin&\
event_date=2015-06-30 10:28:55&\
event_place=roppongi&\
event_capacity=10&\
event_fee=100&\
created_by=2015-04-30 10:28:55\
" \
https://moyopi.herokuapp.com/events
```

