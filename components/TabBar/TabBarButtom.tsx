import React from "react";

<PlatformPressable
    //key={route.name}
    href={buildHref(route.name, route.params)}
    accessibilityState={isFocused ? { selected: true } : {}}
    accessibilityLabel={options.tabBarAccessibilityLabel}
    testID={options.tabBarButtonTestID}
    onPress={onPress}
    onLongPress={onLongPress}
    style={styles.tabbarItem}
>
    {icon[route.name]({color: isFocused ? '#673ab7' : '#222'})}
    <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
        {label}
    </Text>
</PlatformPressable>