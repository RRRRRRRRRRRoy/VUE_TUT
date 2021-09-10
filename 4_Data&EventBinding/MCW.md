Methods
1. User with event binding or data binding
2. Data Binding: Method is executed for every re=render cycle of the component
3. Use for events or data that really needs to be re-evaluated all the time

Computed
1. Use the data binding
2. Computed properties are only re-evaluated if one of their "Used values" changed
3. Use for data that depends on other data

Watcher
1. Not used directly in template
2. allows you to run any code in reaction to some changed data
    (sending Http requese)
3. Use for any non-data update you want to make