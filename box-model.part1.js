childWidth = 100;
childPadding = 10;
childBorder = 1;
childMargin = 20;

parentWidth = 110;

childSize = childWidth + (childPadding + childBorder + childMargin) * 2;
overflow = childSize > parentWidth;
diferentSize = parentWidth - childSize;
alert("Horizontal child size " + childSize + "px");
alert("child overflow?  " + overflow);
alert("Diferent size " + diferentSize + "px");
