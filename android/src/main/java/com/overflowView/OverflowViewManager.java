package com.overflowView;

import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ViewGroupManager;

public class OverflowViewManager extends ViewGroupManager<OverflowViewLayout> {

  @Override
  protected OverflowViewLayout createViewInstance(ThemedReactContext reactContext) {
    return new OverflowViewLayout(reactContext);
  }

  @Override
  public String getName() {
    return "OverflowView";
  }

}
