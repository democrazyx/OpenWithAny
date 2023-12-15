# OpenWithAny
open current page url with anything

I want to open local pdf files with edge for its convenient marking and saving, however no addons can meet my demand, so I write one.

This addon based on the custom url protocol, so you need to add custom url protocol to your system.

# Usage (currently only for Edge)
## install
1. install the addon
2. add the url protocol settings of regedit, by creating a file naming `OpenWithEdge.reg`, then edit with notepad, and copy the following code into it, then save and double click the file.
```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\openedge]
@="URL:OPEN EDGE"
"URL Protocol"=""

[HKEY_CLASSES_ROOT\openedge\shell]

[HKEY_CLASSES_ROOT\openedge\shell\open]

[HKEY_CLASSES_ROOT\openedge\shell\open\command]
@="powershell.exe -WindowStyle hidden -NoProfile -Command \"Invoke-Command { $args = '%1'; $args = $args -Replace 'openedge://', ''; $args = $args -Replace '//', '://'; $args = $args -Replace ':://', '://'; Start-Process -FilePath 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe' -ArgumentList $args }\""

```

*check carefully of the msedge.exe path in the last line:* 

`-FilePath 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'`:

3. click the addon icon to open current page with edge

## Uninstall
1. uninstall the addon
2. remove the url protocol
```
Windows Registry Editor Version 5.00

[-HKEY_CLASSES_ROOT\openedge]

```
