Vue Instance Lifecycle

CreateApp()
    |
beforeCreate()
    |
Create() -------------
    \                 |   
    \           Compile Template          updated()
    \                 |                       |
beforeMount()---------                  beforeUpdated()      unmounted()
    |                                         |                   |
Mounted()-----> Mounted Vue Instance    Data Changed         beforeUnmount()
                        |                     |                   |
                        | ----------->--------              Instance Unmounted
                        |                                         |
                        |                                         |
                        |------------>----------------------------|